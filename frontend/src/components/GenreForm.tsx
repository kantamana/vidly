// import { useForm, type FieldValues } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   name: z
//     .string()
//     .min(3, { message: "Name must be at least 3 characters long" }),
// });

// type FormData = z.infer<typeof schema>; // This will infer the type from the schema as a sort of interface

interface GenreFormProps {
  onSubmit: (data: FormData) => void;
}

const GenreForm = ({ onSubmit }: GenreFormProps) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Add Genre:
        </label>
        <div className="input-group">
          <input type="text" className="form-control" id="name" />
          <button className="btn btn-primary" onClick={() => onSubmit({ name: "New Genre"})}>Add</button>
        </div>
      </div>
    </>
  );
};

export default GenreForm;
