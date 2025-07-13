import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
});

type FormData = z.infer<typeof schema>;

interface GenreFormProps {
  onSubmit: (data: FormData) => void;
}

const GenreForm = ({ onSubmit }: GenreFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onValidSubmit = (data: FormData) => {
    onSubmit(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)} className="mb-3">
      <label htmlFor="name" className="form-label">
        Add Genre:
      </label>
      <div className="input-group">
        <input
          {...register("name")}
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          id="name"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>
    </form>
  );
};

export default GenreForm;
