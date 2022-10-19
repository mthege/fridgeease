import useFetch from '../../useFetch';


function MyFoods() {

    const URL = 'http://localhost:8000/myFoods/'
    const {loading, error, data, id, name} = useFetch(URL)

    return (
    <div className= "myfoods"key={id}>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {data?.map(data => (
        <div className="myfood" key={id}>{name}</div>
      ))}
    </div>

    )
}

export default MyFoods
