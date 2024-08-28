import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto p-2 sm:p-3 md:p-4 lg:p-5'>
			{!loading ? (
				<BiLogOut
					className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white cursor-pointer'
					onClick={logout}
				/>
			) : (
				<span className='loading loading-spinner sm:loading-sm md:loading-md lg:loading-lg'></span>
			)}
		</div>
	);
};

export default LogoutButton;
