export default function CreateFetch(props) {
   
    if(props.method.type === 'login') {
        fetch(`http://rest.stecenka.lt/${props.method.link}`, 
        {
            headers: {
                'Content-type': 'application/json',
            },
            method: `${props.method.method}`,
            body: JSON.stringify(props.credentials),
        }
    )
    .then(res => res.json())
    .then(token => {
        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
        }
    })
    }

    if(props.method.type === 'register') {
        fetch(`http://rest.stecenka.lt/${props.method.link}`, 
        {
            headers: {
                'Content-type': 'application/json',
            },
            method: `${props.method.method}`,
            body: JSON.stringify(props.credentials),
        }
    )
    .then(res => res.json())
    }

    if(props.method.type === 'newPost') {

        const user = JSON.parse(localStorage.getItem('token'));

        fetch(`http://rest.stecenka.lt/${props.method.link}`, 
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': user.token,
            },
            method: `${props.method.method}`,
            body: JSON.stringify(props.credentials),
        }
    )
    .then(res => res.json())
    }
}