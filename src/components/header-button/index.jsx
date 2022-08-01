import './index.scss'

export const HeaderButton = ({children}) => <button className="header-button">
    <div className='header-button-outer'>
        <div className='header-button-inner'>
            {children}
        </div>
    </div>
</button>

