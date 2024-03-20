
function Addusertable(props)
{
    return(
        <div>
            <h1 className="display-3 bg-dark text-center text-primary rounded mx-auto m-2 p-2   ">LIST OF USERS</h1>
                <table className="table text-center border-2 m-4 table-primary  mx-auto">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Date of Birth</th>
                            <th>City</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((ele,index)=><tr key={index}>
                                <td>{ele.username}</td>
                                <td>{ele.dateofbirth}</td>
                                <td>{ele.city}</td>
                                <td>
                                    <button className="btn btn-dark" onClick={()=>props.func(index)}>D</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
}



export default Addusertable;