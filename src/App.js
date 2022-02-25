import './App.css';
import { useState } from 'react';
import data from "./localization/content";
import notImg from './assets/img/img.png';
import not1Img from './assets/img/img1.jpg';
import not2Img from './assets/img/img2.jpg';
import not3Img from './assets/img/img3.png';
import not4Img from './assets/img/img5.jpg';


function App() {
  const [lang , setLang] = useState('uz');
  const [openModalDell , setOpenModalDell] = useState(false);
  const [openModallAcer , setopenModalAcer] = useState(false);
  const [openModallHp , setopenModalHp] = useState(false);
      return (
          <>
            <div className='Language__box'>
             <header className='Header'>
            <div className="container">
                <nav className='Navbar'>
                    <a className='Navbar__logo' href="#">{data.header[lang].content}</a>
                    <ul className='Navbar__list'>
                        <li className='Navbar__item'><a href="#">{data.nav[lang].content}</a></li>
                        <li className='Navbar__item'><a href="#">{data.nav[lang].content}</a></li>
                        <li className='Navbar__item'><a href="#">{data.nav[lang].content}</a></li>
                       <select defaultValue={setLang}  onChange={(e) => setLang(e.target.value)} className='Select'>
                           <option  value="uz">UZB</option>
                           <option  value="eng">ENG</option>
                           <option  value="ru">RUS</option>
                       </select>
                    </ul>
                </nav>
             </div>
             </header>
           <main className='Main'>
             <section className='Section__hero'>
               <div className="container">
                   <div className="NoutbookBox">
                       <p  className='NoutbookBox__desc'>{data.Section__hero[lang].content}</p>
                       <img className='NoutbookBox__img' src={notImg} alt="img" width={500} height={400} />
                   </div>
               </div>
             </section>
             <section className='Section__top'>
                <div className='container'>
                  <div className="NoutbookHeading">
                   <h2>{data.Section__top.NoutbookHeading[lang].content}</h2>
                   <div className="NoutbookServices">
                       <div className="dellBox">
                              <img src={not1Img} alt="img" />
                              <p>{data.Section__top.dellBox[lang].content}</p>
                              <button onClick={() => setOpenModalDell(!openModalDell)} className='btn btn-primary modalDellButton'>{data.Section__top.dellBox.modalDellButton[lang].content}</button>
                              <dialog className='modalDell' open={openModalDell}>{data.Section__top.dellBox.modalDell[lang].content} <button className='modalDellBtn' onClick={() => setOpenModalDell(false)}><i className='bi bi-x-lg'></i></button></dialog>
                       </div>
                       <div className="acerBox">
                              <img src={not2Img} alt="img" />
                              <p>{data.Section__top.acerBox[lang].content}</p>
                              <button onClick={() => setopenModalAcer(!openModallAcer)} className='btn btn-primary modalAcerButton'>{data.Section__top.acerBox.modalAcerButton[lang].content}</button>
                              <dialog className='modalAcer' open={openModallAcer}>{data.Section__top.acerBox.modalAcer[lang].content}<button className='modalAcerBtn' onClick={() => setopenModalAcer(false)}><i className='bi bi-x-lg'></i></button></dialog>
                       </div>
                        <div className="hpBox">
                              <img src={not3Img} alt="img" />
                              <p>{data.Section__top.hpBox[lang].content}</p>
                              <button onClick={() => setopenModalHp(!openModallHp)} className='btn btn-primary modalHpButton'>{data.Section__top.hpBox.modalHpButton[lang].content}</button>
                              <dialog className='modalHp' open={openModallHp}>{data.Section__top.hpBox.modalHp[lang].content}<button className='modalHpBtn' onClick={() => setopenModalHp(false)}><i className='bi bi-x-lg'></i></button> </dialog>
                        </div>
                   </div>
                   </div>
                  </div>
             </section>
             <section className='Section__bottom'>
               <div className='container'>
                   <div className="NoutbookPage">
                       <img src={not4Img} alt="img" width={600} height={400} />
                       <p>{data.Section__bottom[lang].content}</p>
                   </div>
               </div>
             </section>
           </main>
         </div>
      </>
  );
}

export default App;
