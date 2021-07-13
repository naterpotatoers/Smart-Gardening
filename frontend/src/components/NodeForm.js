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
              placeholder="Node name"
              name="nodename"
              {...register("nodename")} 
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
              placeholder="Description"
              name="description"
              {...register("description")} 
              //ref = {register({ required: true})}
            /><br/><br/>
            <input
              type="text"
              placeholder="Sensors"
              name="sensors"
              {...register("sensors")} 
              //ref = {register({ required: true})}
            /><br/><br/>
            <input type="submit"/>
            
        </form>
    );
};

export default App;