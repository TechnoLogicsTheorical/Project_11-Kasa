import './comp.css'

function Banner(props) {
    return (
        <div className='Banner'>
            {props.children}
        </div>
    )
}

export default Banner;