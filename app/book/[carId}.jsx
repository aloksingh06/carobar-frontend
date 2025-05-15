import { useRouter } from 'next/router';

const BookCarPage = () => {
  const router = useRouter();
  const { carId } = router.query; // yaha se carId milega URL se

  return (
    <div>
      <h1>Book Car Page</h1>
      <p>Selected Car ID: {carId}</p>
      {/* Yaha aap carId ke basis par API se car ki details fetch kar sakte ho */}
    </div>
  );
};

export default BookCarPage;