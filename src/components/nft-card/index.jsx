import './index.scss'

export const NftCard = ({nft}) => {
    
    return <div className='nft-card'>
        <div class="nft-card-image">
            <img src={nft.image} />
        </div>
        <div className="nft-card-details">
            <div className='d-flex justify-content-between mb-2'>
                <div className='nft-card-title'>{nft.title}</div>
                <div className={`nft-card-badge ${nft.badge}`}>{nft.badge}</div>
            </div>
            <div className='d-flex justify-content-between align-items-end'>
                <div className='nft-card-price'>Price: <div className='nft-card-amount'>{nft.price} USD</div></div>
                <a href='#' className='nft-card-history'>View History</a>
            </div>
        </div>
    </div>
}


