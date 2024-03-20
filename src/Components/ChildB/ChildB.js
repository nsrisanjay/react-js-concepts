import ChildE from './ChildE/ChildE'
import ChildF from './ChildF/ChildF'
function ChildB()
{
    return(
        <div>
            <h1 className="text-center text-warning bg-dark">THIS IS CHILD-B</h1>
            <ChildE/>
            <ChildF/>
        </div>
    )
}

export default ChildB