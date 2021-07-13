import { useForm } from "react-hook-form";

const App = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Plant name"
              name="plantname"
              {...register("plantname")} 
             // ref = {register({ required: true})}
            /><br/><br/>
            <input
              type="text"
              placeholder="Garden name"
              name="gardenname"
              {...register("gardenname")} 
             // ref = {register({ required: true})}
            /><br/><br/>
            <input
              type="text"
              placeholder="Plant date"
              name="plantdate"
              {...register("plantdate")} 
              //ref = {register({ required: true})}
            /><br/><br/>
            <input
              type="text"
              placeholder="Harvest date"
              name="harvestdate"
              {...register("harvestdate")} 
              //ref = {register({ required: true})}
            /><br/><br/>
            <input type="submit"/>
            
        </form>
    );
};

export default App;