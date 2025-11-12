import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Login({ setLogin }) {
    const [user, setUser] = useState({
        email: "mashhurbek08@gmail.com",
        password: "mashhurbek2011"
    })

    const [isemail, setEmail] = useState("")
    const [ispassword, setPassword] = useState("")

    const handleForm = () => {
        const isuser = {
            email: isemail,
            password: ispassword
        }

        let userEmail = isuser.email
        let userPassword = isuser.password

        if (user.email === userEmail && user.password === userPassword) {
            setLogin(true)
            toast.success("Sizning loginingiz topildi")
        } else {
            setLogin(false)
            toast.error("Sizning loginingiz topilmadi !!!")
        }

    }

    return (
        <div>
            <div className="h-screen w-[100] h-[737px] bg-[url('/src/Conponit/Container.png')] bg-cover bg-cente">
                <div className='logn'>
                    <div className=' w-[500px] h-[500px] bg-[#00000080] p-[40px] rounded-[15px]'>
                        <h1 className=' text-white text-[30px]'>Saytga o'tish</h1>
                        <br />
                        <input value={isemail} onChange={((e) => setEmail(e.target.value))} className="px-3 py-3 w-[400px] rounded-lg outline-none border mb-5" type="text" placeholder="email" />
                        <br />
                        <input value={ispassword} onChange={((e) => setPassword(e.target.value))} className="px-3 py-3 w-[300px] rounded-lg outline-none border" type="password" placeholder="Password kiriting" />
                        <br />
                        <br />
                        <button onClick={handleForm} className="group px-6 py-3 text-[18px] rounded-lg outline-none border bg-blue-600 text-white border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 transition-all duration-200" >goto site</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
