import Img from '../Conponit/Abstract Design.png'
import Img2 from '../Conponit/Rectangle 511 (Stroke).png'
import Img3 from '../Conponit/Vector 619.png'
import Img4 from '../Conponit/Vector (3).png'
import Img5 from '../Conponit/Indicators Container.png'
import Card2 from '../Conponit/Card2'
import Futer from '../Conponit/Futer'
import Start from '../Conponit/Start'
import Retng from '../Conponit/Retng'
import Card3 from '../Conponit/Card3'
import { Link, NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="h-screen w-[100] h-[737px] bg-[url('/src/Conponit/Container.png')] bg-cover bg-cente">
        <div className="contenr">
          <div className="parent">
            <img src={Img} alt="" className='imgs' />
          </div>
        </div>
      </div>
      <div className="wrappr">
        <div className="wrap">
          <div className="cons">
            <div>
              <h1 className=' text-[40px]'>The Best Streaming Experience</h1>
              <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With </p>
              <p>StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows more.</p>
              <p>You can also create your own watchlists, so you can easily find the content you want to watch.</p>
              <br />
              <button className="bun"><img src={Img2} alt="" /><p className=' -translate-y-6'>Start Watching Now</p></button>
            </div>
          </div>
          <div className="vids">
            <div className="tek">
              <div>
                <h1 className=' text-[30px]'>Explore our wide variety of categories</h1>
                <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
              </div>
              <div>
              </div>
            </div>
            <Card3 />
            <Retng />
          </div>
          <div className="hunk">
            <div>
              <h1 className=' text-[30px]'>Frequently Asked Questions</h1>
              <p className=' text-[12px] text-[#999999]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            <button className='buns1'>Ask a Question</button>
          </div>
          <div className=" flex mt-20 gap-[150px]">
            <div>
              <div className=' flex gap-8'>
                <button className="buns">01</button>
                <div>
                  <h1>What is StreamVibe?</h1>
                  <p className=' text-[12px] text-[#999999]'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
                <h1 className=' text-[40px] cursor-pointer'>-</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[250px]'>
                <div className=' flex gap-8'>
                  <button className="buns">02</button>
                  <div>
                    <h1>How much does StreamVibe cost?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[200px]'>
                <div className=' flex gap-8'>
                  <button className="buns">03</button>
                  <div>
                    <h1>What content is available on StreamVibe?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[280px]'>
                <div className=' flex gap-8'>
                  <button className="buns">04</button>
                  <div>
                    <h1>How can I watch StreamVibe?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
            </div>
            <div>
              <div className=' flex gap-[280px]'>
                <div className=' flex gap-8'>
                  <button className="buns">05</button>
                  <div>
                    <h1>How do I sign up for StreamVibe?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[280px]'>
                <div className=' flex gap-8'>
                  <button className="buns">06</button>
                  <div>
                    <h1>What is the StreamVibe free trial?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[170px]'>
                <div className=' flex gap-8'>
                  <button className="buns">07</button>
                  <div>
                    <h1>How do I contact StreamVibe customer support?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[197px]'>
                <div className=' flex gap-8'>
                  <button className="buns">08</button>
                  <div>
                    <h1>What are the StreamVibe payment methods?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
            </div>
          </div>
          <div className="hunk">
            <div>
              <h1 className=' text-[30px]'>Choose the plan that's right for you</h1>
              <p className=' text-[12px] text-[#999999]'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div className="button1">
              <NavLink
              className='px-4 py-3 rounded-[8px] cursor-pointer'
                to="/"
                 activeClassName={({ isActive }) =>
                  isActive ? 'button2 active2' : 'button2'
                }
              >
                <button className='w-full h-full'>Monthly</button>
              </NavLink>
              <NavLink
              className='px-4 py-3 rounded-[8px] cursor-pointer'
                to="/Sons"
                 activeClassName={({ isActive }) =>
                  isActive ? 'button2 active2' : 'button2'
                }
              >
                <button className='w-full h-full'>Yearly</button>
              </NavLink>
            </div>
          </div>
          <Outlet />
          <Start />
          <Futer />
        </div>
      </div>
    </div >
  )
}

export default App
