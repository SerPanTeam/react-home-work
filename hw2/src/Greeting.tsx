export default function Greeting({ name }: { name: string }){
    return (
        <h2>
            Привет, {name}!
        </h2>
    );
}