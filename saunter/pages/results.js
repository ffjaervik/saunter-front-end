import {useRouter} from 'next/router';

const router = useRouter();
const data = router.query;
console.log(data);