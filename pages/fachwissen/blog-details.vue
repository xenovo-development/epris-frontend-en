<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Blog Details" title="Find all our latest news, insights, and events" backgroundUrl= "/images/bg/breadcrumb-bg-four.jpg" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row  mtn-50">
                    <div class="col-lg-8 col-12 order-lg-1 mt-50">
                        <div class="row row-cols-1 no-gutters">
                            <!-- Blog Start -->
                            <div class="blog-3 blog-details col" data-aos="fade-up">
                                <div class="thumbnail">
                                    <img class="w-100" src="/images/blog/370/blog-1.jpg" alt="Blog Image">
                                </div>
                                <div class="info">
                                    <h3 class="title">Marketing just became invaluable: a new revenue marketing model for a new world</h3>
                                    <div class="desc">
                                        <p><strong>We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>

                                        <p>Even if it is a brave new world for everyone else, for marketers it's another day in the proverbial office.</p>

                                        <p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>

                                        <p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>

                                        <p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That wasn't ever close to the whole truth, of course, but past company structures — in which Marketing always played second fiddle to Sales — allowed that falsehood to persist.</p>

                                        <p>The pandemic has transformed what the marketing team means to an organization: It's given us agency. It's upended the customer journey. It's redefined how sales and marketing teams should interact. And it's forced businesses to see the value that marketers provide in a digital world.</p>
                                    </div>
                                    <ul class="meta mb-0 mt-4">
                                        <li><i class="fal fa-pencil-alt"></i>Written by Admin, 10 Oct 2020</li>
                                        <li><i class="fas fa-tags"></i>Marketing, UX Design</li>
                                        <li><i class="fas fa-comments"></i>4 Comments</li>
                                        <li class="media"><a href="#"><i class="fas fa-share-alt"></i>Share this post</a>
                                            <div class="list">
                                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                                <a href="#"><i class="fab fa-tumblr-square"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Blog End -->

                            <div class="entry-author">
                                <div class="author-info">
                                    <div class="author-avatar">
                                        <img src="/images/blog/blog-author.png" alt="image">
                                    </div>
                                    <div class="author-description">
                                        <h6 class="author-name">Eloise Smith</h6>
                                        <span class="designation">CEO at Flow</span>
                                        <div class="author-biographical-info">
                                            She is a lawyer, podcaster, speaker, and writer. As an educational content director, she helps develop HasThemes' premium training products.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="blog-nav-links">
                                <h4 class="title">Related Posts </h4>
                                <div class="nav-list">
                                    <div class="nav-item prev">
                                        <div class="inner">
                                            <a href="#">
                                                <div class="hover-bg has-thumbnail" :style="{backgroundImage: `url('/images/pagination/blog-pagination.jpg')`}"></div>
                                                <span class="cate">Marketing</span>
                                                <h6>Eleven top tips for developing agile marketing strategies that work</h6>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="nav-item next">
                                        <div class="inner">
                                            <a href="#">
                                                <div class="hover-bg has-thumbnail" :style="{backgroundImage: `url('/images/pagination/blog-pagination-2.jpg')`}"></div>
                                                <span class="cate">Startup</span>
                                                <h6>Growing a startup involves balancing out the financial stack</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 order-lg-2 mt-50">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Section End -->

        <CallToActionTwo />
        <TheFooter />
    </div>
</template>

<script>
    import blogData from "~/data/blog.json";

    export default {
        data() {
            return {
                blogData
            }
        },
    };
</script>


