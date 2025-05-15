import Spinner from 'react-bootstrap/Spinner';
const LoaderComp = () => {
    return (
        <div align="center" style={{margin:"100px"}}>
            <Spinner 
            animation="grow"
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    );
};  
export default LoaderComp;