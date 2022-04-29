import styled from "styled-components"

export const Container = styled.div`
    background: #fff;
    width: 100%;
    min-height: 940px;
    margin-left: 4rem;
    padding: 2rem 6rem;
    border-radius: 60px 60px 60px 0px;

    .header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 5rem;

        .alerts {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            
            .ring-animation {
                width: 60px;
            }
            
            p {
                font-weight: 700;
                font-size: 1.7rem;
            }
        }
        
        .xp {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .xp-animation {
                width: 80px;
            }

            p {
                font-weight: 700;
                font-size: 1.7rem;
            }
        }

        .user {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            p {
                font-weight: 700;
                font-size: 1.8rem;
            }

            img {
                width: 17px;
                cursor: pointer;
            }
        }
    }

    .user-name {
        display: flex;
        align-items: center;
        gap: 2rem;

        img {
            width: 75px;
        }
    }

    .main {
        display: flex;
        justify-content: space-between;
        gap: 6rem;

        .l-box {
            width: 100%;

            p {
                font-weight: 700;
                font-size: 1.6rem;
                margin: 2.5rem 0;
            }

            .cards-control {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 1rem;
                gap: 1rem;
            }
        }

        .r-box {
            width: 500px;

            p {
                font-weight: 700;
                font-size: 1.6rem;
                margin: 2.5rem 0;
            }

            .badges {
                display: flex;
                flex-wrap: wrap;

                .badge-animation {
                    width: 170px;
                    transition: transform .2s;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
`