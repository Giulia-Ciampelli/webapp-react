import 'ldrs/hourglass';

export default function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <l-hourglass
                size="80"
                bg-opacity="0.1"
                speed="1.75"
                color="#4A6F8C"
            ></l-hourglass>
        </div>
    )
}