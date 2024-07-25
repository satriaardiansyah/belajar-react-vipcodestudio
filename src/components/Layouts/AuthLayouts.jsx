/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const {children, title, type} = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
        <div className='w-full max-w-xs'>
            <h1 className='text 3xl font-bold mb-2 text-blue-600'>{title}</h1>
            <p className='font-medium text-slate-500'>Welcome, Please enter your details</p>
            {children}
            <p className="text-sm mt-5 text-center">
                {type === 'login' ? 'Don\'t have an account?' : 'Already have an account?'} 
                {/* //ternary operator untuk 2 kondisi */}
                {type === 'login' && ( //jika ingin render 1 1
                    <Link to="/register" className="text-blue-500 font-semibold"> Register</Link> 
                )}

                {type === 'register'  && (
                    <Link to="/login" className="text-blue-500 font-semibold"> Login</Link>
                )}
            </p>
        </div>
        </div>
    )
}

const Navigation = ({type}) => { //kondisional rendering menggunakan if else
    if (type === 'login') {
        return (
            <p className="text-sm mt-5 text-center">
                Don't have an account?
                <Link to="/register" className="text-blue-500 font-semibold"> Register</Link>
            </p>
        );
     } else {
            return (
                <p className="text-sm mt-5 text-center">
                    Already have an account?
                    <Link to="/login" className="text-blue-500 font-semibold"> Login</Link>
                </p>
            )
        }
    };

export default AuthLayouts;