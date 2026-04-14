export default function DentalLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2Fa0d37ddb877e4dc6973cbeece6297218?format=webp&width=400"
        alt="Chauhan's Dental & Cosmo Laser Logo"
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-105 transition-transform duration-300"
      />

      {/* Clinic Name */}
      <div className="hidden sm:block">
        <h1 className="text-lg font-poppins font-bold text-slate-900">
          Chauhan's Dental
        </h1>
        <p className="text-xs font-poppins font-semibold" style={{ color: '#0ea5a4' }}>
          & Cosmo Laser
        </p>
      </div>
    </div>
  );
}
