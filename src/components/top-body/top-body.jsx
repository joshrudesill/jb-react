
const TopBody = ({children}) => {
    return Object.keys(children).map(child => children[child])
}

export default TopBody;