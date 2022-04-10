
const Wrapper = ({ children }) => {
    return Object.keys(children).map(child => children[child])
}

export default Wrapper;