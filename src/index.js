import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './lee.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import datainfo from './data/data.json'
import List_box from './components/List_box';
import New_books from './components/New_books';
import Navi_var from './components/Navi_var';
import Bestbook from './components/Bestbook';
import Best_slide from './components/Best_slide';
import Detail_newbooks from './components/Detail_newbooks';
import Essay from './components/Essay';
import Design from './components/Design';
import Illust from './components/Illust';
import Photo from './components/Photo';
import Postcard from './components/Postcard'
import Curation from './components/Curation'
import Goods from './components/Goods'
import Program from './components/Program'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Navi_var />
      <Routes>
        <Route path="/Essay" element={<Essay />} />
        <Route path="/Design" element={<Design />} />
        <Route path='/Illust' element={<Illust />} />
        <Route path='/Photo' element={<Photo />} />
        <Route path='/Postcard' element={<Postcard />} />
      </Routes>


      <Routes>
        <Route path="/" element={
          <>
            <Best_slide data={datainfo} />
            <List_box></List_box>
          </>
        } />
        <Route path="/new-books/" element={<New_books />} />
        <Route path="/Bestbook/" element={<Bestbook />} />
        <Route path="/Curation/" element={<Curation />} />
        <Route path="/Goods/" element={<Goods />} />
        <Route path="/Program/" element={<Program />} />

        <Route path="/new-books/:index" element={<Detail_newbooks />} />
      </Routes>
    </BrowserRouter>
  </>
);