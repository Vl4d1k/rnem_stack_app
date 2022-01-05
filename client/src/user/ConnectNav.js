import { useSelector } from "react-redux";
import moment from "moment";

const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;

    return (
        <>
            <div className="flex justify-around">
                <div>
                    <div>
                        <img
                            className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 rounded-md"
                            alt='avatar'
                            src={`https://eu.ui-avatars.com/api/?name=${user.name}`}
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">{user.name}</h4>
                        <p className="mt-1">
                            {`Joined ${moment(user.createdAt).fromNow()}`}
                        </p>
                    </div>
                </div>
                {
                    user?.stripe_seller?.charges_enabled ? 
                        <>
                            <div>Pending balance</div>
                            <div>Payout settings</div>
                        </>
                        : null
                }
            </div>
        </>
    );
};

export default ConnectNav;
