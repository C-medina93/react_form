import { useState } from "react";
function SignUpForm(){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ error, setError ] = useState(null);

    async function handleSubmit ( event ) {
        event.preventDefault();
        console.log('hello');
    }

    return <div>
    <h2> Sign UP!</h2>
    <form onSubmit ={handleSubmit}>
        <label>
            Username: <input value ={username} onChange = {(x) => setUsername(x.target.value)}/>
        </label>
        <br></br>
        <label>
            Password: <input value = {password} onChange = {(y) => setPassword(y.target.value)}/>
        </label>
        <br></br>
        <button>Submit</button>
    </form>
    </div>
};

export default SignUpForm; 