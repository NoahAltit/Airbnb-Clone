const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Disaster Relief</p>
        <p>Community Funds</p>
        <p>Combating Discrimination</p>
        <p>About the Community</p>
        <p>Careers</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Try Hosting</p>
        <p>Visit the Community Forum</p>
        <p>AirCover for Hosts</p>
        <p>Host Responsibly</p>
        <p>Explore Hosting Resources</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Cancellation Options</p>
        <p>Safety Information</p>
        <p>Report a Concern</p>
      </div>
    </div>
  );
};

export default Footer;
