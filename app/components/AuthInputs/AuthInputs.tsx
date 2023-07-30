interface InputProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const AuthInputs = ({ inputs, handleChangeInput, isSignIn }: InputProps) => {
  return (
    <div>
      {!isSignIn && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="First Name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="Last Name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChangeInput}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="w-full rounded border p-2 py-3"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChangeInput}
        />
      </div>

      {!isSignIn && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="Phone Number"
            name="phoneNumber"
            value={inputs.phoneNumber}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="City"
            name="city"
            value={inputs.city}
            onChange={handleChangeInput}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="w-full rounded border p-2 py-3"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default AuthInputs;
