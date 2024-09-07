import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between place-items-center p-4 m-4 border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt={`It is from profile Pic`} />
        </div>
    );
};
export default Header;