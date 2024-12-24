export default function LoginPage() {
    return (
        <form className="p-[400px] text-center border-solid" method="post" >
            <h2>Login Form</h2>
            <div className="flex flex-col justify-center items-center">
                <label className="text-start">Username</label>
                <input className="py-2 rounded-lg" type="username" placeholder="Enter Username" name="username" required />

                <label >Password</label>
                <input className="py-2 rounded-lg" type="password" placeholder="Enter Password" name="password" required />
            </div>
            <div className="flex justify-center gap-4 py-4">
                <button className="bg-white text-black p-1 rounded-lg" type="button">Submit</button>
                <span className="bg-white text-black p-1 rounded-lg">
                    <a href="#">Forgot password ?</a>
                </span>
            </div>
        </form>
    )
}