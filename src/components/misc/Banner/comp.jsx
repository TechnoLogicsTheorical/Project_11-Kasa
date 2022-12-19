import './comp.css'

function Banner(props) {
    return (
        <div className={'Banner '
        && props.type === 'small' ?
            'Banner Banner-Small' :
            null
        }>
            {props.children}
        </div>
    )
}

export default Banner;