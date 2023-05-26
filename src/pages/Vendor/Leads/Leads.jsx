import classes from './Leads.module.css';
import AccordionCard from './AccordionCard';
import {
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faIndianRupee,
  faList,
  faSearch,
  faTableCellsLarge,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Leads_List = [
  {
    id: 1,
    status: 'New',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 2,
    status: 'Pending',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 3,
    status: 'New',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 4,
    status: 'Pending',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 5,
    status: 'New',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 6,
    status: 'Pending',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 7,
    status: 'New',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
  {
    id: 8,
    status: 'Pending',
    name: 'John Doe',
    service_type: 'Wordpress Design',
    date: '2021-09-01',
    deadline: '2021-09-15',
    budget: '50000',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
  },
];

const Leads = () => {
  const [collapsedCard, setCollapsedCard] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const handleFormModalClose = () => setShowFormModal(false);
  const handleFormModalShow = () => setShowFormModal(true);

  const handleStatusModalClose = () => setShowStatusModal(false);
  const handleStatusModalShow = () => setShowStatusModal(true);

  const submitHandler = (e) => {
    e.preventDefault();
    handleFormModalClose();
    handleStatusModalShow();
  };

  const cardToggleHandler = (id) => {
    setCollapsedCard(id);
  };

  return (
    <div className={`page-content-wrapper-main ${classes.Leads}`}>
      <Modal
        show={showStatusModal}
        onHide={handleStatusModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center"></Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleStatusModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="center-elements-div">
            <Image src="/assets/images/proposal_sent.svg" alt="success" fluid />
            <h3 className="mt-5 mb-5">Your Proposal Has Been Sent!</h3>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showFormModal}
        onHide={handleFormModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center">
            Submit Proposal
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleFormModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} sm={12}>
              <Form.Label htmlFor="vendor-budget">Budget</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  aria-label="Budget"
                  aria-describedby="vendor-budget"
                />
                <InputGroup.Text id="vendor-budget">
                  <FontAwesomeIcon icon={faIndianRupee} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col md={6} sm={12}>
              <Form.Label htmlFor="vendor-time">Time</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="date"
                  placeholder=""
                  aria-label="Time"
                  aria-describedby="vendor-time"
                />
              </InputGroup>
            </Col>
          </Row>
          <Form.Label htmlFor="vendor-service">Service Type</Form.Label>
          <Form.Select
            aria-label="Service Type Dropdown"
            aria-describedby="vendor-service"
            className="mb-3"
          >
            <option>Select here</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Label htmlFor="vendor-platform">Platform</Form.Label>
          <Form.Select
            aria-label="Platform Dropdown"
            aria-describedby="vendor-platform"
            className="mb-3"
          >
            <option>Select here</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="references">
            <Form.Label>References</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              aria-describedby="vendor-references"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              aria-describedby="vendor-description"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="btn-cta form-control"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mb-3">
        <Col md={4} sm={12}>
          <h3 className="page-content-heading">Leads</h3>
        </Col>
        <Col md={8} sm={12}>
          <Row>
            <Col md={6} sm={12}>
              <InputGroup className="mb-3 input-search">
                <InputGroup.Text id="projects-search">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Projects"
                  aria-label="Search Projects"
                  aria-describedby="projects-search"
                />
              </InputGroup>
            </Col>
            <Col md={6} sm={12} className={classes.action_buttons_container}>
              <Form.Select aria-label="Default select example">
                <option>Change Proposal</option>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="proposal">Proposal</option>
                <option value="change_proposal">Change Proposal</option>
              </Form.Select>
              <button>
                <FontAwesomeIcon icon={faList} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTableCellsLarge} />
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      {Leads_List.length > 0 ? (
        Leads_List.map((item) => (
          <AccordionCard
            index={item.id}
            item={item}
            key={item.id}
            handleShow={handleFormModalShow}
            collapsedCard={collapsedCard}
            cardToggleHandler={cardToggleHandler}
          />
        ))
      ) : (
        <div className="center-elements-div mt-5">
          <div className="no-data-container">
            <Image src="/assets/images/no_data.svg" alt="no data" />
            <div className="no-data-text-container">
              <h3>No Results</h3>
              <span>
                Sorry, there are no results for this choice. Please try another
                option.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
