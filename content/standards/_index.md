+++
aliases = ["standards"]
title = "Standards"
author = "Hugo Authors"
layout = "redirect"
redirect_to = "/standards/complete/"
tags = ["standards"]
description = ""
+++

<style>
.standards-page .card {
  transition: none !important;
  transform: none !important;
}
.standards-page .card:hover {
  transform: none !important;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05) !important;
}
.standards-page .card:hover::before {
  opacity: 0 !important;
}
.standards-page .card:hover .card-img-top {
  transform: none !important;
}
</style>

<div class="container-fluid py-5 standards-page">
  <div class="row mb-5">
    <div class="col-12 text-center">
      <p class="lead text-muted">We offer two types of standards to meet different project needs</p>
    </div>
  </div>

  <div class="row g-4 align-items-start">
    <div class="col-12 col-lg-6">
      <img src="/images/Complete_base_standards.png" alt="Complete and Base Standards Overview" class="img-fluid rounded shadow">
    </div>
    <div class="col-12 col-lg-6">
      <div class="row g-4">
        <div class="col-12">
          <div class="border rounded-3 shadow-sm bg-white">
            <div class="p-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h3 class="mb-0">Complete Standards</h3>
                <button class="btn btn-sm btn-outline-secondary border-0" type="button" data-bs-toggle="collapse" data-bs-target="#completeCollapse" aria-expanded="false">
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>
              <div class="collapse" id="completeCollapse">
                <div class="mb-4">
                  <h5 class="fw-bold">Definition</h5>
                  <p class="text-muted">The full, end-to-end package that includes the methodology, MRV, and digital asset creation (crediting logic, registry integration, token issuance).</p>
                </div>
                <div class="mb-4">
                  <h5 class="fw-bold">Purpose</h5>
                  <p class="text-muted">Ensures that a project is not only scientifically sound and transparently monitored but also fully ready for credit issuance, trading, and retirement on-chain.</p>
                </div>
                <div class="mb-4">
                  <h5 class="fw-bold">When to use</h5>
                  <p class="text-muted">For projects aiming to generate Carbontribe-certified digital assets (e.g., carbon, biodiversity, or water credits) that are externally verifiable and tradable.</p>
                </div>
                <div class="alert alert-light mb-4">
                  <i class="fas fa-lightbulb me-2"></i><strong>Analogy:</strong> Think of this as the full recipe book plus certification seal — every ingredient, process, and market linkage included.
                </div>
              </div>
              <div class="d-grid">
                <a href="/standards/complete/" class="btn btn-primary btn-lg">
                  View Complete Standards <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="border rounded-3 shadow-sm bg-white">
            <div class="p-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h3 class="mb-0">Base Standards</h3>
                <button class="btn btn-sm btn-outline-secondary border-0" type="button" data-bs-toggle="collapse" data-bs-target="#baseCollapse" aria-expanded="false">
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>
              <div class="collapse" id="baseCollapse">
                <div class="mb-4">
                  <h5 class="fw-bold">Definition</h5>
                  <p class="text-muted">A lighter package covering only methodology and MRV (data collection, monitoring, verification).</p>
                </div>
                <div class="mb-4">
                  <h5 class="fw-bold">Purpose</h5>
                  <p class="text-muted">Enables tracking and communication of outcomes without tradable credits. It also provides space to work on challenges that classical credit systems cannot address, such as:</p>
                  <ul class="text-muted small">
                    <li>Boundary problems (e.g. street trash is legally a city responsibility, making additionality hard to prove)</li>
                    <li>Baseline issues (e.g. urban litter would eventually be collected by city services, unlike marine debris)</li>
                  </ul>
                </div>
                <div class="mb-4">
                  <h5 class="fw-bold">When to use</h5>
                  <p class="text-muted">For educational tools, citizen science, pilots, or ESG reporting where the focus is measurement and engagement.</p>
                </div>
                <div class="alert alert-light mb-4">
                  <i class="fas fa-lightbulb me-2"></i><strong>Analogy:</strong> Like a blueprint without the market layer — a structure to measure and validate impact, without turning it into a financial asset.
                </div>
              </div>
              <div class="d-grid">
                <a href="/standards/base/" class="btn btn-primary btn-lg">
                  View Base Standards <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row mt-5">
    <div class="col-12">
      <div class="alert alert-info text-center" role="alert">
        <i class="fas fa-info-circle me-2"></i>Both standard types maintain our commitment to scientific rigor, transparency, and verifiable impact. Choose the standard type that best fits your project's scope, timeline, and requirements.
      </div>
    </div>
  </div>
</div> -->

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Toggle chevron icon on collapse
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('i');
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    });
  });
});
</script>
