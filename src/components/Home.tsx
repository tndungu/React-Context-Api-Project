import { DisplayLogin } from './DisplayLogin'
import { useLoginContext } from './useLoginContext'

export const Home = () => {
    const { loggedIn } = useLoginContext()

    return (
        <div className='pageLayout'>
            <div>
                <h3>Home Page</h3>
            </div>
            {loggedIn &&
                <DisplayLogin />
            }
            <div>
            </div>
        </div>
    )
}