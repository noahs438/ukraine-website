//Header
const header = document.querySelector('header');

//Banner
const banner = document.querySelector('#bannerBg');
const bannerAddition = document.querySelector('#bannerBgAddition');

//Content
const h1Line = document.querySelectorAll('.line span');
const contentP = document.querySelector('.content-inner p');
const contentButton = document.querySelector('.content-inner .btn-row');

//Image
const ribbonImg = document.querySelector('.image-inner img');
const featureBanner = document.querySelector('#featureBanner');

//NOT SUPPOSED TO BE GREEN
const featureBannerGreen = document.querySelector('#featureBannerGreen');

//Features
const featuresContentTitle = document.querySelector('.features-content h3');
const featuresContentP = document.querySelector('.features-content p');
const featuresContentButton = document.querySelector('.features-content .btn-row');
const featuresList = document.querySelectorAll('.features-list li');

//Banner timeline
const bannerTL = gsap.timeline();

//Features timeline
const featuresTL = gsap.timeline();

//ScrollMagic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '#featureBannerGreen',
    triggerHook: 0,
    reverse: false
})
    .setTween(featuresTL)
    .addTo(controller)


bannerTL
    .from([bannerAddition, banner], {
        duration: 1.2,
        width: 0,
        skewX: 4,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2
        }
    })
    //Animate from something towards the final state (not to something from the final state)
    //Header animation attached to banner timeline - waits for banner to finish before beginning
    .from(header, {
        delay: -0.2,
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut'
    })
    .from(h1Line, {
        delay: -0.4,
        y: 80,
        duration: 0.8,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2
        }
    })
    .from([contentP, contentButton], {
        delay: -0.6,
        y: -40,
        duration: 0.8,
        opacity: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2
        }
    });

gsap.from(ribbonImg, {
    delay: 2.2,
    x: -100,
    skewX: 2,
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out'
});
gsap.from([featureBanner,featureBannerGreen], {
    delay: 2.4,
    x: -60,
    skewX: 6,
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
        amount: 0.2
    }
});

featuresTL
    .from([featuresContentTitle, featuresContentP, featuresContentButton], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power3.out',
        stagger: {
            amount: 0.2,
        }
    })
    .from(featuresList, {
        delay: -0.4,
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power3.out',
        stagger: {
            amount: 0.4
        }
    })
