import Link from 'next/link';

export default function University({ universities }) {
    let counter = 0;
    universities.forEach(university => {
        counter++;
        university.id = counter;
    });

    return <div className="university">
        {universities.map(university => (
            <Link href={`/university/${university.id}`}>
                <a>
                    <h3>{university.name}</h3>
                    <h5><a href={university.web_pages[0]}>{university.web_pages[0]}</a></h5>
                </a>
            </Link>
        ))}

        <style jsx>{`
             .university{
               display: flex;
               flex-wrap: wrap;
               width: 1200px;
               margin: 0 auto;
               a {
                   width: 25%;
                   position: relative;
                   h3 {
                       font-size:20px;
                       width: 100%;
                   }
               }
             }
        `}
        </style>
    </div>
}


