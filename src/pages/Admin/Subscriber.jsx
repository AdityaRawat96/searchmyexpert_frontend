import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { UIContext } from '../../context/UIContext';
import Excel from 'exceljs';
import { saveAs } from 'file-saver';
import { useRef } from 'react';

const Subscriber = () => {
  const [subscribersList, setSubscribersList] = useState([]);
  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchData({
      url: '/api/getSubscribers',
      method: 'GET',
    }).then((result) => {
      setSubscribersList(result);
      if (result.status) {
        setSubscribersList(result.data);
      }
    });
  }, [fetchData]);

  const removeSubscriber = (subscriberId) => {
    const body = {
      subscriberId: subscriberId,
    };
    fetchData({
      url: '/api/removeSubscriber',
      method: 'POST',
      body,
    }).then((res) => {
      if (res.status) {
        updateUIState({
          show: true,
          title: 'Success',
          text: 'Subscriber removed!',
          icon: 'success',
        });
        setSubscribersList((prevList) =>
          prevList.filter((ads) => ads.Id !== subscriberId)
        );
      } else {
        updateUIState({
          show: true,
          title: 'Error',
          text: 'An unexpected error occurred! Please try again.',
          icon: 'error',
        });
      }
    });
  };

  const showWarning = (subscriberId) => {
    updateUIState({
      show: true,
      title: 'Warning',
      text: 'Are you sure you want to remove this?',
      icon: 'warning',
      showCancel: true,
      confirmAction: () => removeSubscriber(subscriberId),
    });
  };

  const workbook = new Excel.Workbook();
  const workSheetName = 'Subscribers data';
  const workBookName = 'Exported Subscribers Data';

  const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Date', key: 'date' },
  ];

  const saveExcel = async () => {
    try {
      const fileName = workBookName;

      // creating one worksheet in workbook
      const worksheet = workbook.addWorksheet(workSheetName);

      // add worksheet columns
      // each columns contains header and its mapping key from data
      worksheet.columns = columns;

      // updated the font for first row.
      worksheet.getRow(1).font = { bold: true };

      // loop through all of the columns and set the alignment with width.
      worksheet.columns.forEach((column) => {
        column.width = column.header.length + 5;
        column.alignment = { horizontal: 'center' };
      });

      // loop through data and add each one to worksheet
      subscribersList.map((subscriber) =>
        worksheet.addRow({
          id: subscriber.Id,
          name: subscriber.Name,
          email: subscriber.Email,
          date: new Date(subscriber.CreatedTimestamp).toLocaleString('en-US'),
        })
      );

      // loop through all of the rows and set the outline style.
      worksheet.eachRow({ includeEmpty: false }, (row) => {
        // store each cell to currentCell
        const currentCell = row._cells;

        // loop through currentCell to apply border only for the non-empty cell of excel
        currentCell.forEach((singleCell) => {
          // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
          const cellAddress = singleCell._address;

          // apply border
          worksheet.getCell(cellAddress).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
          };
        });
      });

      // write the content using writeBuffer
      const buf = await workbook.xlsx.writeBuffer();

      // download the processed file
      saveAs(new Blob([buf]), `${fileName}.xlsx`);
    } catch (error) {
      console.error('<<<ERRROR>>>', error);
      console.error('Something Went Wrong', error.message);
    } finally {
      // removing worksheet's instance to create new one
      workbook.removeWorksheet(workSheetName);
    }
  };

  return (
    <Container>
      <Card className="my-3">
        <Card.Header>Active Subscribers</Card.Header>
        <Card.Body>
          <div className="d-flex flex-row-reverse">
            <Button
              type="button"
              variant="primary"
              className={`mx-2 my-3`}
              onClick={saveExcel}
            >
              <FontAwesomeIcon icon={faFileExcel} />
              <span className="mx-1">Export excel</span>
            </Button>
          </div>

          <Table striped bordered hover ref={tableRef}>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Date</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {subscribersList.map((subscriber) => (
                <tr key={'subscriber_' + subscriber.Id}>
                  <td>{subscriber.Id}</td>
                  <td>{subscriber.Name}</td>
                  <td>{subscriber.Email}</td>
                  <td>
                    {new Date(subscriber.CreatedTimestamp).toLocaleString(
                      'en-US'
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      type="button"
                      onClick={(e) => showWarning(subscriber.Id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Subscriber;
