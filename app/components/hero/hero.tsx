import Introduction from './introduction';
import Navigation from './navigation';


export default function hero() {
    return (
        <div className='my-10 lg:h-screen flex items-center justify-center'>
            <div className='mt-5 relative lg:max-w-9/12 lg:h-3/4 bg-background-light/75 flex flex-col lg:flex-row items-center justify-around p-5 lg:p-10 rounded-[40px]'>
                <div className='flex flex-row gap-3 absolute top-8 left-8'>
                    <div className='w-4 h-4 bg-red-600 rounded-full' />
                    <div className='w-4 h-4 bg-yellow-600 rounded-full' />
                    <div className='w-4 h-4 bg-green-600 rounded-full' />
                </div>
                <Introduction />
                <Navigation />
            </div>
        </div>
    )
}
