import './CreateResume.css'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { useEffect } from 'react'

export const CreateResume = () =>{
    useEffect(() => {
        document.title = 'Создать резюме'
    })

    return(
        <div className='resume-page'>
            <Header />
            <div className='resume-content'>
                <div className='title-resume'>
                    <hr></hr>
                    <h1>Резюме</h1>
                    <hr></hr>    
                </div>  
                <hr className='resume-hr'></hr>
                <div className='resume-me'>
                    <div className='resume-input'>
                        <label>ФИО<span>*</span></label>
                        <input
                            type='text'></input>
                        <p>Ваши контактные данные, чтобы работодатель смог с вами связаться</p>
                    </div>
                    <div className='resume-input'>
                        <label>Телефон<span>*</span></label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                    <div className='resume-input'>
                        <label>Город<span>*</span></label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                    <div className='resume-input'>
                        <label>О себе</label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                </div>
                <hr className='resume-hr'></hr>
                <div className='resume-me'>
                    <div className='resume-work'>
                        <label>Специальность<span>*</span></label>
                        <input
                            type='text'></input>
                        <p>Стажировка, на которую вы бы хотели устроиться</p>
                    </div>
                    <div className='resume-work'>
                        <label>Примеры работ<span>*</span></label>
                        <input
                            type='text'
                            placeholder='Cсылка...'></input>
                        <p></p>
                    </div>
                </div>
                <hr className='resume-hr'></hr>
                <div className='resume-me'>
                    <div className='resume-work'>
                        <label>Образование<span>*</span></label>
                        <input
                            type='text'
                            placeholder='Среднее профессиональное'></input>
                        <p>Ваше образование</p>
                    </div>
                    <div className='resume-work'>
                        <label>Примеры работ<span>*</span></label>
                        <input
                            type='text'></input>
                        <p></p>
                    </div>
                    <div className='resume-btn'>
                        <button
                            type='submit'><img src='/img/btn_logo.svg' alt='btn_logo'/> Опубликовать</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}