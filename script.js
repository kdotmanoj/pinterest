document.addEventListener('DOMContentLoaded', () => {
    const collectionsContainer = document.getElementById('collectionsContainer');
    const pinsModal = document.getElementById('pinsModal');
    const pinsGrid = document.getElementById('pinsGrid');
    const collectionTitle = document.getElementById('collectionTitle');
    const closeModal = document.getElementById('closeModal');

    const collectionsData = [
        {
            id: 1,
            title: 'Cartoon Mania',
            cover: 'https://i.pinimg.com/236x/12/1c/c8/121cc8bbb407edb942d92aee982d8fb0.jpg',
            pinCount: 4,
            pins: [
                { 
                    title: 'Donald Duck', 
                    image: 'https://web.archive.org/web/20091027091955/http://geocities.com/mrmikecartoons/disney13.gif',
                    rotation: '5deg' 
                },
                { 
                    title: 'Thomas and Friends', 
                    image: 'https://i.pinimg.com/736x/d7/fd/82/d7fd823ee1e9e159285d6dc24a18443b.jpg', 
                    rotation: '-3deg' 
                },
                { 
                    title: 'Johnny Bravo', 
                    image: 'https://i.pinimg.com/736x/fd/4e/1d/fd4e1d679041d5ca5c31dac4c096a934.jpg', 
                    rotation: '7deg' 
                },
                { 
                    title: 'Kitty White', 
                    image: 'https://i.pinimg.com/736x/73/3b/ea/733bea65bd53653b48f69af70efd8289.jpg', 
                    rotation: '-3deg' 
                }
            ]
        },
        {
            id: 2,
            title: 'Hip Hop',
            cover: 'https://i.pinimg.com/236x/53/fc/63/53fc636afe5009d01622b7a52ba7fafc.jpg',
            pinCount: 5,
            pins: [
                {
                    title: 'Tupac Shakur',
                    image: 'https://i.pinimg.com/736x/ea/2b/ce/ea2bce87be847c70c2802b8c3b6c0f13.jpg',
                    rotation: '10deg'
                },
                {
                    title: 'The Notorious B.I.G.',
                    image: 'https://i.pinimg.com/736x/a1/4f/80/a14f8020bc92a6992f3fd18a2a60d046.jpg',
                    rotation: '-5deg'
                },
                {
                    title: 'Wu-Tang Clan',
                    image: 'https://i.pinimg.com/236x/71/0b/de/710bdeb537488807711069d46ee5a1eb.jpg',
                    rotation: '7deg'
                },
                {
                    title: 'Snoop Dog',
                    image: 'https://i.pinimg.com/736x/41/dd/e4/41dde431f508e5f32102d9609606fe1a.jpg',
                    rotation: '-3deg'
                },
                {
                    title: 'Eminem',
                    image: 'https://i.pinimg.com/236x/21/83/7e/21837ee7f7b059da9f63430caeb1160a.jpg',
                    rotation: '8deg'
                }
            ]
        },
        {
            id: 3,
            title: 'Video Games',
            cover: 'https://i.pinimg.com/236x/cd/94/e6/cd94e66e4e69c9f47f678bb53a2b1174.jpg',
            pinCount: 8,
            pins: [
                {
                    title: 'Super Mario',
                    image: 'https://i.pinimg.com/236x/cb/7f/61/cb7f61d0cff417085ce0d7894bdea566.jpg',
                    rotation: '3deg'
                },
                {
                    title: 'The Legend of Zelda',
                    image: 'https://i.pinimg.com/236x/ca/79/0c/ca790c99a76122079ac751d565ea8741.jpg',
                    rotation: '-7deg'
                },
                {
                    title: 'Sonic the Hedgehog',
                    image: 'https://i.pinimg.com/736x/26/df/d1/26dfd1e99635fe64ec323b6554fd23a2.jpg',
                    rotation: '5deg'
                },
                {
                    title: 'Street Fighter',
                    image: 'https://i.pinimg.com/736x/ae/f6/71/aef6715b9c1e32fff44b095fc3b9549f.jpg',
                    rotation: '-4deg'
                },
                {
                    title: "Pokémon Red/Blue",
                    image: "https://i.pinimg.com/236x/a2/51/a6/a251a6a6f3ff117cd4f5d3b15449330a.jpg",
                    rotation: "2deg"
                },
                {
                    title: "Mortal Kombat",
                    image: "https://i.pinimg.com/236x/6b/f7/3f/6bf73f430396b12dfc1711faab168544.jpg",
                    rotation: "-5deg"
                },
                {
                    title: "Tomb Raider",
                    image: "https://i.pinimg.com/236x/bb/9f/c2/bb9fc2629a2ffebc7a25f30363271dc7.jpg",
                    rotation: "6deg"
                },
            ]
        },
        {
            id: 4,
            title: 'Tech',
            cover: 'https://i.pinimg.com/474x/5f/f4/90/5ff490a0c6a44114fda0bb8f5add2f1d.jpg',
            pinCount: 3,
            pins: [
                {
                    title: 'Walkman',
                    image: 'https://i.pinimg.com/236x/0d/e1/d5/0de1d51c53a4f4ff635c326a966f05af.jpg',
                    rotation: '4deg'
                },
                {
                    title: 'Game Boy',
                    image: 'https://i.pinimg.com/236x/93/9d/b7/939db70afe0011a2175bca9665cabd38.jpg',
                    rotation: '-6deg'
                },
                {
                    title: 'Cassette Tapes',
                    image: 'https://i.pinimg.com/236x/82/88/23/828823e0a996a770e083ba6bc6eb2310.jpg',
                    rotation: '2deg'
                }
            ]
        },
        {
            id: 5,
            title: 'Movies',
            cover: 'https://i.pinimg.com/236x/38/50/25/3850258d66a023388dc88158b12094d8.jpg',
            pinCount: 4,
            pins: [
                {
                    title: 'Jurassic Park',
                    image: 'https://i.pinimg.com/236x/4b/9d/b2/4b9db2fb0da375042293266f6368d251.jpg',
                    rotation: '3deg'
                },
                {
                    title: 'The Matrix',
                    image: 'https://i.pinimg.com/236x/22/e0/c0/22e0c0f9dc63b5baaeedfca581eaa7f5.jpg',
                    rotation: '0deg'
                },
                {
                    title: 'Titanic',
                    image: 'https://i.pinimg.com/236x/86/c0/a6/86c0a677085e470841572f145baca929.jpg',
                    rotation: '-2deg'
                },
                {
                    title: 'Pulp Fiction',
                    image: 'https://i.pinimg.com/236x/3d/7b/7e/3d7b7ee89be5c3b1efb9d2f870f1f9c3.jpg',
                    rotation: '0deg'
                },
            ]
        },
        {
            id: 6,
            title: 'Fashion',
            cover: 'https://i.pinimg.com/236x/b4/68/d4/b468d47bc6407f696b7996d09800207d.jpg',
            pinCount: 3,
            pins: [
                {
                    title: 'Flannel Shirts',
                    image: 'https://i.pinimg.com/236x/09/9d/23/099d232045a1f4a6c8fd0518fc01c6ac.jpg',
                    rotation: '4deg'
                },
                {
                    title: 'Platform Shoes',
                    image: 'https://i.pinimg.com/236x/eb/ca/60/ebca602eeca1403c496346863b34119a.jpg',
                    rotation: '5deg'
                },
                {
                    title: 'Cargo Pants',
                    image: 'https://i.pinimg.com/236x/84/97/ac/8497ac1a027278551370635e88a01de3.jpg',
                    rotation: '1deg'
                },
            ]
        },
        {
            id: 7,
            title: 'Music',
            cover: 'https://i.pinimg.com/474x/27/24/4d/27244d2ef69993d83233a06ed779362b.jpg',
            pinCount: 7,
            pins: [
                {
                    title: 'Spice Girls',
                    image: 'https://i.pinimg.com/736x/be/f7/b2/bef7b22bd2aaeff24102ed342c65cc10.jpg',
                    rotation: '-5deg'
                },
                {
                    title: 'Backstreet Boys',
                    image: 'https://i.pinimg.com/236x/14/ef/3c/14ef3caf78e411c9f9a7e56d805c276a.jpg',
                    rotation: '7deg'
                },
                {
                    title: 'Nirvana',
                    image: 'https://i.pinimg.com/736x/bd/0c/98/bd0c98a7812d4b45a8cb761aeeb1abdf.jpg',
                    rotation: '-3deg'
                },
                {
                    title: 'TLC',
                    image: 'https://i.pinimg.com/236x/7c/58/4f/7c584f9eef817b1b248e2030d1682646.jpg',
                    rotation: '2deg'
                },
                {
                    title: 'R.E.M.',
                    image: 'https://i.pinimg.com/236x/73/c1/1c/73c11c54bbec906e13e5bbf8faec22c7.jpg',
                    rotation: '-4deg'
                },
                {
                    title: 'The Beatles',
                    image: 'https://i.pinimg.com/236x/04/a1/c9/04a1c908298867a1a73581ca410a7c83.jpg',
                    rotation: '2deg'
                },
                {
                    title: 'Pink Floyd',
                    image: 'https://i.pinimg.com/236x/b4/70/dd/b470dd1ca9c237cc8ef83d906ae490fb.jpg',
                    rotation: '-6deg'
                }
            ]
        },
        {
            id: 8,
            title: 'TV Shows',
            cover: 'https://i.pinimg.com/236x/a3/16/51/a3165150d6692ac3c3cc8209bf6b9900.jpg',
            pinCount: 4,
            pins: [
                {
                    title: 'Friends',
                    image: 'https://i.pinimg.com/236x/ee/6c/2b/ee6c2b7a7f01ffdf1d36e53fa593d8a0.jpg',
                    rotation: '3deg'
                },
                {
                    title: 'The Fresh Prince of Bel-Air',
                    image: 'https://i.pinimg.com/236x/7f/3f/23/7f3f2337e606f8623b9c155803cab4d1.jpg',
                    rotation: '6deg'
                },
                {
                    title: 'Twin Peaks',
                    image: 'https://i.pinimg.com/474x/d7/d6/84/d7d684ab3e7dec228c821b507aab5d8b.jpg',
                    rotation: '5deg'
                },
                {
                    title: 'Buffy the Vampire Slayer',
                    image: 'https://i.pinimg.com/236x/a4/30/00/a430002426fdd8ef0f90ebf298bd628e.jpg',
                    rotation: '4deg'
                }
            ]
        },
        {
            id: 9,
            title: 'Athletes',
            cover: 'https://i.pinimg.com/236x/b0/14/64/b01464903ac566bf3f4b799a2fe5fe82.jpg',
            pinCount: 4,
            pins: [
                {
                    title: 'Michael Jordan',
                    image: 'https://i.pinimg.com/236x/b0/14/64/b01464903ac566bf3f4b799a2fe5fe82.jpg',
                    rotation: '3deg'
                },
                {
                    title: 'Serena Williams',
                    image: 'https://i.pinimg.com/236x/5a/1a/29/5a1a29ab1c7a4681058f06a2f58113e3.jpg',
                    rotation: '-2deg'
                },
                {
                    title: 'Tiger Woods',
                    image: 'https://i.pinimg.com/736x/72/09/e4/7209e4094e8a24022c718763ba14c3b3.jpg',
                    rotation: '7deg'
                },
                {
                    title: 'Peyton Manning',
                    image: 'https://i.pinimg.com/236x/79/00/0c/79000c906b5289b16da5190bf55b80d7.jpg',
                    rotation: '-5deg'
                }
            ]
        }
    ];
    

    function createCollectionElement(collection) {
        const collectionEl = document.createElement('div');
        collectionEl.classList.add('collection');
        collectionEl.style.width = '200px';
        collectionEl.style.height = '250px';
        collectionEl.innerHTML = `
            <div class="collection-preview">
                <img src="${collection.cover}" alt="${collection.title}" class="collection-cover" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="collection-overlay">
                    <div >${collection.title}</div>
                    <div class="pin-count">${collection.pinCount} Pins</div>
                </div>
            </div>
        `;

        collectionEl.addEventListener('click', () => openPinsModal(collection));
        return collectionEl;
    }

    function openPinsModal(collection) {
        pinsGrid.innerHTML = '';
        collectionTitle.textContent = collection.title;

        collection.pins.forEach(pin => {
            const pinEl = document.createElement('div');
            pinEl.classList.add('pin');
            pinEl.style.setProperty('--rotation', pin.rotation);
            pinEl.innerHTML = `
                <div class="pushpin"></div>
                <img src="${pin.image}" alt="${pin.title}">
                <div class="pin-title">${pin.title}</div>
            `;
            pinsGrid.appendChild(pinEl);
        });

        pinsModal.style.display = 'flex';
    }

    closeModal.addEventListener('click', () => {
        pinsModal.style.display = 'none';
    });

    pinsModal.addEventListener('click', (e) => {
        if (e.target === pinsModal) {
            pinsModal.style.display = 'none';
        }
    });

    collectionsData.forEach(collection => {
        const collectionEl = createCollectionElement(collection);
        collectionsContainer.appendChild(collectionEl);
    });
});