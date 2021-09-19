import {useRouter} from 'next/router';

export default function UniversityDetail({params}){
    console.log('Params', params);
    const router = useRouter()
    const {url} = router.query;

    return <div>
     University {url}    
    </div>
}

export async function getServerSideProps({params}){
    return {
        props: {
            params
        }
    }
}