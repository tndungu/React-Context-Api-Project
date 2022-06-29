import { DisplayLogin } from './DisplayLogin'
import { useLoginContext } from './useLoginContext'

export const Settings = () => {
    const { loggedIn } = useLoginContext()

    return (
        <div className='pageLayout'>
            <div>
                <h3>Settings</h3>
            </div>
            {loggedIn &&
                <DisplayLogin />
            }
            <div>
            </div>
        </div>
    )
}