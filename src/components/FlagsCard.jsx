export default function FlagsCard({ obj }) {
  return (
    <div className="card bg-base-100 w-full max-w-[350px] shadow-xl mx-auto">
      <figure>
        <img
          className="w-full h-64 object-cover"
          src={obj.flags.png}
          alt={obj.flags.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{obj.name.common}</h2>
        <ul>
          <li>
            Population: <span className="font-thin">{obj.population}</span>
          </li>
          <li>
            Region: <span className="font-thin">{obj.region}</span>
          </li>
          <li>
            Capital: <span className="font-thin">{obj.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
