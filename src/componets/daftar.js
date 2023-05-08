import ImgDaftar from "../assets/img-daftar.jpg";
import { useNavigate } from "react-router-dom";
import Login from "../componets/login";

const Daftar = () =>{
    const navigate = useNavigate()
    return(
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="hidden sm:block">
                    <img className="w-full h-full object-cover" src={ImgDaftar} alt="" />
                </div>
                <div className="bg-gray-800 flex flex-col justify-center">
                    <form action="" className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                        <h2 className="text-4xl dark:text-white font-bold text-center">
                            DAFTAR
                        </h2>
                        <div className="flex flex-col mt-2 py-2 text-gray-400">
                            <label>Nama Lengkap</label>
                            <input type="text" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline"/>
                        </div>
                        <div className="flex flex-col py-2 text-gray-400">
                            <label>Email</label>
                            <input type="email" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline"/>
                        </div>
                        <div className="flex flex-col py-2 text-gray-400">
                            <label>Password</label>
                            <input type="password" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline"/>
                        </div>
                        <div className="flex flex-col py-2 text-gray-400">
                            <label>Konfirmasi Password</label>
                            <input type="password" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline"/>
                        </div>
                        <button className="w-full mt-10 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">DAFTAR</button>
                        <div className="justify-center flex mt-5">Sudah punya Akun? <a href="" className="ms-2" onClick={()=>navigate('/')}>Masuk</a></div>
                    </form>
                </div>
            </div>
    )
}

export default Daftar;