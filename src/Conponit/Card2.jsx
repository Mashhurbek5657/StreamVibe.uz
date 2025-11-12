import Img6 from './Vector 619 (1).png'
import Img7 from './Container (2).png'
import Img8 from './Container (3).png'
import Img9 from './Container (5).png'
import Img10 from './Container (6).png'

export default function Card() {
    return (
        <div className=" flex gap-20 mt-10">
            <div className="cards">
                <img src={Img7} alt="" className=' cursor-pointer' />
                <br/>
                <div className='fon'>
                    <p>Action</p>
                    <img src={Img6} alt="" />
                </div>
            </div>
            <div className="cards">
                <img src={Img8} alt="" className=' cursor-pointer' />
                <br />
                <div className='fon'>
                    <p>Action</p>
                    <img src={Img6} alt="" />
                </div>
            </div>
            <div className="cards">
                <img src={Img9} alt="" className=' cursor-pointer' />
                <br />
                <div className='fon'>
                    <p>Action</p>
                    <img src={Img6} alt="" />
                </div>
            </div>
            <div className="cards">
                <img src={Img10} alt="" className=' cursor-pointer' />
                <br />
                <div className='fon'>
                    <p>Action</p>
                    <img src={Img6} alt="" />
                </div>
            </div>
        </div>
    )
}


