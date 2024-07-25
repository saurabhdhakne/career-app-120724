import { CreatePost } from "../components/createPost";


const CreateService = () => {

  return (
    <div className="container mx-auto p-4 w-full">
        <CreatePost title="Create new Service" postType={"services"} />
    </div>
  );
};

export default CreateService;
