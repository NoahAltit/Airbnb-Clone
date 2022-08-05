const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">How Airbnb Works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Disaster Relief</p>
        <p className="cursor-pointer">Careers</p>
        <p className="cursor-pointer">Community Funds</p>
        <p className="cursor-pointer">Combating Discrimination</p>
        <p className="cursor-pointer">About the Community</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p className="cursor-pointer">Try Hosting</p>
        <p className="cursor-pointer">Visit the Community Forum</p>
        <p className="cursor-pointer">AirCover for Hosts</p>
        <p className="cursor-pointer">Host Responsibly</p>
        <p className="cursor-pointer">Explore Hosting Resources</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">AirCover</p>
        <p className="cursor-pointer">Cancellation Options</p>
        <p className="cursor-pointer">Safety Information</p>
        <p className="cursor-pointer">Report a Concern</p>
      </div>
    </div>
  );
};

export default Footer;
