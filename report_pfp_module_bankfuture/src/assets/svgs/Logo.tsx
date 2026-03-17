const LogoSVG = ({ width = 130 }: { width?: number }) => (
    <img
        src="/assets/Logo.png"
        alt="Terminal"
        style={{ width, height: 'auto', display: 'block' }}
    />
);

export default LogoSVG;
