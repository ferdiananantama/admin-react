import ImgLogin from "../assets/img-login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-gray-800 flex flex-col justify-center">
                <form action="" className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">
                        LOGIN
                    </h2>
                    <div className="flex flex-col mt-2 py-2 text-gray-400">
                        <label>Email</label>
                        <input type="text" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline"/>
                    </div>
                    <div className="flex flex-col py-2 text-gray-400">
                        <label>Password</label>
                        <input type="password" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline"/>
                    </div>
                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input type="checkbox" className="mr-2" />Ingat Sandi</p>
                        <p>Lupa Password</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">Masuk</button>
                    <div className="justify-center flex mt-3">Belum punya Akun? <a href="" className="ms-1" onClick={ () => navigate('/Daftar')}>Daftar</a></div>
                </form>
            </div>
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={ImgLogin} alt="" />
            </div>
        </div>
    );
}

export default Login;
