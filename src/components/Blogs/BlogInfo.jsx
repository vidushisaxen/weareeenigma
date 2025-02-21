"use client"
import { LinkedinShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Image from 'next/image';

const BlogInfo = ({ shareLink, avatar }) => {

    return (
        <>
            
          
                <div className="flex items-center justify-start gap-6">
                    <LinkedinShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/linkedin.webp" alt="LinkedIn Icon" title='LinkedIn Icon' width={40} height={40}/>
                    </LinkedinShareButton>
                    <FacebookShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/facebook.webp" alt="Facebook Icon" title='Facebook Icon' width={40} height={40}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/twitter.webp" alt="Twitter Icon" title='Twitter Icon' width={40} height={40} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={`https://weareenigma.com/${shareLink}`} quote="Read more articles like this on our website - https://weareenigma.com" hashtag="#weareenigma">
                        <Image className='w-[2vw] tablet:w-[5vw] mobile:w-9' src="/assets/icons/whatsapp.webp" alt="WhatsApp Icon" title='WhatsApp Icon' width={40} height={40}/>
                    </WhatsappShareButton>
                </div>
       </>
    );
};

export default BlogInfo;